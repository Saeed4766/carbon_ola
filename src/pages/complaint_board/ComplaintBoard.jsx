import React from "react";
import Container from "../../components/sharedComponent/container";
import {AiOutlinePlusCircle} from 'react-icons/ai'

const ComplaintBoard = () => {
  return (
    <Container>
      <div className="bg-compBg bg-cover bg-no-repeat h-screen">
        <div className="bg-[#600aff] text-white mb-5 px-5">
          <h3 className="">Complaints</h3>
        </div>

        <form className="font-semibold">
          <div className="flex w-full justify-between px-7 gap-[4rem]">
            <div className="flex flex-col w-full">
              <label htmlFor="" className="">
                Name
              </label>

              <input type="text" placeholder="Input Placeholder" />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="" className="">
                Name
              </label>
              <input type="text" placeholder="Input Placeholder" />
            </div>
          </div>

          <div className="flex flex-col px-7 mt-5">
            <label htmlFor="">Messages</label>
            <textarea
              name="Input Placeholder"
              id=""
              cols="30"
              rows="7"
            ></textarea>
          </div>

          <div className="flex items-center gap-1 px-7 mt-1">
            <input type="checkbox" />
            <p className="font-normal">Subscribe to our Newsletter</p>
          </div>

          <div className="px-7 mt-3 flex justify-end">
            <button className="bg-[#2b007a] text-sm font-bold text-[#dbd9dd] rounded-[5px] py-1.5 px-5">
              Send
            </button>
          </div>
        </form>

        <div className="bg-[#600aff] text-white mt-5 px-5">
          <h3 className="">Frequently asked question</h3>
        </div>

        <div className="px-7">
          <div id="accordion-arrow-icon" data-accordion="open">
            <h2 id="accordion-arrow-icon-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-arrow-icon-body-1"
                aria-expanded="false"
                aria-controls="accordion-arrow-icon-body-1"
              >
                <span>Is carbon a bank</span>
                <AiOutlinePlusCircle size={20} color="black" />
              </button>
            </h2>
            <div
              id="accordion-arrow-icon-body-1"
              class="hidden"
              aria-labelledby="accordion-arrow-icon-heading-1"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  temporibus voluptatem non sint perferendis? Non eveniet
                  necessitatibus in modi officia laboriosam tenetur ea, itaque
                  voluptas, eius neque unde iste! Perferendis!
                </p>
              </div>
            </div>
          </div>
          <div id="accordion-arrow-icon" data-accordion="open">
            <h2 id="accordion-arrow-icon-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-arrow-icon-body-2"
                aria-expanded="false"
                aria-controls="accordion-arrow-icon-body-2"
              >
                <span>why choose carbon</span>
                <AiOutlinePlusCircle size={20} color="black" />
              </button>
            </h2>
            <div
              id="accordion-arrow-icon-body-2"
              class="hidden"
              aria-labelledby="accordion-arrow-icon-heading-2"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  temporibus voluptatem non sint perferendis? Non eveniet
                  necessitatibus in modi officia laboriosam tenetur ea, itaque
                  voluptas, eius neque unde iste! Perferendis!
                </p>
              </div>
            </div>
          </div>
          <div id="accordion-arrow-icon" data-accordion="open">
            <h2 id="accordion-arrow-icon-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-arrow-icon-body-3"
                aria-expanded="false"
                aria-controls="accordion-arrow-icon-body-3"
              >
                <span>Do i get an ATM card</span>
                <AiOutlinePlusCircle size={20} color="black" />
              </button>
            </h2>
            <div
              id="accordion-arrow-icon-body-3"
              class="hidden"
              aria-labelledby="accordion-arrow-icon-heading-3"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  temporibus voluptatem non sint perferendis? Non eveniet
                  necessitatibus in modi officia laboriosam tenetur ea, itaque
                  voluptas, eius neque unde iste! Perferendis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ComplaintBoard;
