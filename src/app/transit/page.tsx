import { DottedSurface } from "@/components/ui/dotted-surface";
import { cn } from '@/lib/utils';

export default function DemoOne() {
	return (
		<DottedSurface className="size-full">
			<div className="absolute inset-0 flex items-start justify-center pt-40">
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
            <div className="text-center">
              <h1 className="font-mono text-2xl font-semibold mb-4">
                You have reached our Division of Transit Logistics
              </h1>
              <p className="font-mono text-base">
                This website is currently under construction
              </p>
            </div>
			</div>
		</DottedSurface>
	);
}
