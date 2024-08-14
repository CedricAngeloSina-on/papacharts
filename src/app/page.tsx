import CSVForm from "@/components/custom/csv-form";
import Barchart from "@/components/custom/barchart";

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center lg:flex-row">
      <div className="flex w-1/2 flex-col items-center px-4">
        <CSVForm />
      </div>
      <div className="flex w-1/2 flex-col items-center px-4">
        <Barchart />
      </div>
    </main>
  );
}
