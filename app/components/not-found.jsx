import AnimatedButton from "../ui/animated-button";
import AnimatedInView from "./animated-in-view";

import { clippathInLeft } from "../utils/animations";

export default function NotFound() {
  return (
    <section className="h-screen bg-secondary text-primary">
      <div className="flex h-full flex-col justify-end gap-y-3 px-space-sm pb-space-md">
        <AnimatedInView animation={clippathInLeft}>
          <AnimatedButton
            label="back to home"
            href="/"
            className="text-xsmall/none"
          />
          <h1 className="mt-space-sm text-xlarge/tight font-black uppercase">
            this page does not exit.
          </h1>
        </AnimatedInView>
      </div>
    </section>
  );
}
