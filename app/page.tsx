import Image from "next/image";
import { Button, Badge, Input, Card } from "@/components/ui";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="p-8 space-y-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Badge variant="primary">Best-seller</Badge>
          <Badge variant="accent">Nouveau</Badge>
          <Input label="Votre nom" placeholder="Jean Dupont" />
          <Card variant="hover" className="p-6">
            <p>Test Card</p>
          </Card>
        </div>
      </main>
    </div>
  );
}
