import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Field,
  Input,
  Label,
} from "@headlessui/react";
import Heading from "../components/Heading";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const positionValue = [
  { id: 1, value: "20%" },
  { id: 2, value: "40%" },
  { id: 3, value: "90%" },
  { id: 4, value: "130%" },
  { id: 5, value: "270%" },
];

const GenerateGradient = () => {
  return (
    <section className="">
      <Heading title="Gradient Create" description="Create gradients" />

      <div className="flex  items-center justify-center gap-4">
        <div className="flex flex-col  items-center justify-center gap-4">
          <div className="flex gap-4">
            <Field>
              <Label className="text-sm data-[disabled]:opacity-50">
                Color
              </Label>
              <div className="flex items-center justify-center p-2 border-2 border-neutral-300 rounded-xl">
                <Input
                  name="full_name"
                  type="text"
                  className="active:outline-none focus:outline-none"
                  data-focus
                  data-hover
                />
                <div className="p-2 w-[24px] h-[24px] bg-blue-500 rounded-md" />
              </div>
            </Field>
            <Field>
              <Label className="text-sm data-[disabled]:opacity-50">
                Position
              </Label>
              <div className="flex items-center justify-center p-2 border-2 border-neutral-300 rounded-xl">
                <Input
                  name="full_name"
                  type="text"
                  className="active:outline-none focus:outline-none"
                  data-focus
                  data-hover
                />
                <Disclosure as="div" className="relative">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 absolute bg-white">
                    <div className="flex items-center justify-between gap-2 p-2">
                      s
                    </div>

                    {/* <p>20%</p>
                <p>20%</p>
                <p>20%</p>
                <p>20%</p>
                <p>20%</p> */}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </Field>
          </div>

          <div className="flex gap-4">
            <Field>
              <Label className="text-sm data-[disabled]:opacity-50">
                Rotation
              </Label>
              <div className="flex items-center justify-center p-2 border-2 border-neutral-300 rounded-xl">
                <Input
                  name="full_name"
                  type="text"
                  className="active:outline-none focus:outline-none"
                  data-focus
                  data-hover
                />
                <Disclosure as="div" className="relative">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 absolute bg-white">
                    <div className="flex items-center justify-between gap-2 p-2">
                      s
                    </div>

                    {/* <p>20%</p>
                <p>20%</p>
                <p>20%</p>
                <p>20%</p>
                <p>20%</p> */}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </Field>
            <Field>
              <Label className="text-sm data-[disabled]:opacity-50">Type</Label>
              <div className="flex items-center justify-center p-2 border-2 border-neutral-300 rounded-xl">
                <Input
                  name="full_name"
                  type="text"
                  className="active:outline-none focus:outline-none"
                  data-focus
                  data-hover
                />
                <Disclosure as="div" className="relative">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 absolute bg-white">
                    <div className="flex items-center justify-between gap-2 p-2">
                      s
                    </div>

                    {/* <p>20%</p>
                <p>20%</p>
                <p>20%</p>
                <p>20%</p>
                <p>20%</p> */}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </Field>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-72 w-72 rounded-md"></div>
      </div>
    </section>
  );
};

export default GenerateGradient;
