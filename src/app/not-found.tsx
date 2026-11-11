import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col items-center justify-center p-gutter text-center">
      <div className="bg-surface-container-low border border-surface-variant/40 rounded-xl p-space-xl max-w-lg w-full flex flex-col items-center gap-space-md shadow-2xl">
        <span className="px-space-sm py-space-xs bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase rounded">
          ERR_404 // SECTOR OUT OF BOUNDS
        </span>
        <h1 className="font-headline-xl text-headline-xl text-primary uppercase">
          DESYNC DETECTED
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          The requested tactical coordinate does not exist in Victor
          Mallick&apos;s [WIZARDEZGG] spatial memory map.
        </p>
        <Link
          href="/"
          className="px-space-lg py-space-sm bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase font-bold rounded hover:bg-secondary-container hover:text-on-secondary transition-colors"
        >
          RETURN TO SPATIAL CORE
        </Link>
      </div>
    </div>
  );
}
