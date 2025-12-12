import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextResponse, type NextRequest } from 'next/server';

import prisma from '@/lib/prisma';

type ClerkEmailAddress = {
  id: string;
  email_address: string;
};

export async function POST(req: NextRequest) {
  let evt: any;

  try {
    evt = await verifyWebhook(req);
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const { type, data } = evt;

  // Guard: Clerk events should always have an id, but don’t assume
  const clerkId: string | undefined = data?.id;
  if (!clerkId) {
    return NextResponse.json({ error: 'Missing user id' }, { status: 400 });
  }

  switch (type) {
    case 'user.created':
    case 'user.updated': {
      const emailAddresses = (data.email_addresses ??
        []) as ClerkEmailAddress[];

      const primaryEmail =
        emailAddresses.find((e) => e.id === data.primary_email_address_id)
          ?.email_address ?? null;

      const name =
        [data.first_name, data.last_name].filter(Boolean).join(' ') ||
        data.username ||
        null;

      // If your Prisma schema keeps email required, keep this check.
      // If you changed to email String? @unique, you can remove this check.
      if (!primaryEmail) {
        return NextResponse.json(
          { error: 'No primary email on Clerk user' },
          { status: 422 }
        );
      }

      await prisma.user.upsert({
        where: { clerkId },
        create: {
          clerkId,
          email: primaryEmail,
          name,
          deletedAt: null, // ✅ ensure active
        },
        update: {
          email: primaryEmail,
          name,
          deletedAt: null, // ✅ restore if previously deleted
        },
      });

      return NextResponse.json({ ok: true });
    }

    case 'user.deleted': {
      // ✅ SOFT DELETE
      // Recommended: also clear unique fields like email so it can be reused.
      // This assumes Prisma: email String? @unique
      await prisma.user.updateMany({
        where: { clerkId },
        data: {
          deletedAt: new Date(),
          email: null,
          name: null,
        },
      });

      return NextResponse.json({ ok: true });
    }

    default:
      return NextResponse.json({ ok: true });
  }
}
