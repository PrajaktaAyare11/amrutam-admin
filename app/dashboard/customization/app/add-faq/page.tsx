"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AddFaqPage() {
  const router = useRouter();

  const [showOnHomepage, setShowOnHomepage] = useState(false);
  const [showReplaceModal, setShowReplaceModal] = useState(false);
  const [showSelectReplaceModal, setShowSelectReplaceModal] = useState(false);

  const MAX_FAQ = 5;
  const homepageFaqCount = 5; // mock full

  const handleSubmit = () => {
    if (showOnHomepage && homepageFaqCount >= MAX_FAQ) {
      setShowReplaceModal(true);
    } else {
      router.push("/dashboard/customization/app/faq");
    }
  };

  return (
    <div className="space-y-6">

      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold">Add New FAQ</h2>

      {/* FORM */}
      <div className="bg-white p-8 rounded-xl shadow-sm space-y-6">

        {/* Platform + Title */}
        <div className="grid grid-cols-2 gap-6">
          <input className="border p-3 rounded-md" placeholder="Select Platform *" />
          <input className="border p-3 rounded-md" placeholder="Select Title *" />
        </div>

        {/* Add to homepage */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setShowOnHomepage(!showOnHomepage)}
        >
          <div
            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
              showOnHomepage ? "border-green-700" : "border-gray-400"
            }`}
          >
            {showOnHomepage && (
              <div className="w-3 h-3 bg-green-700 rounded-full" />
            )}
          </div>
          <span className="text-sm">Add to homepage as well</span>
        </div>

        {/* Question + Answer */}
        <div className="grid grid-cols-2 gap-6">
          <textarea className="border p-3 rounded-md h-32" placeholder="Add Question *" />
          <textarea className="border p-3 rounded-md h-32" placeholder="Add Answer *" />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">Clear all</Button>
          <Button className="bg-[#3A643B]" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>

      {/* POPUP 1: Homepage Full */}
      {showReplaceModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[420px] text-center">
            <p className="text-red-500 font-medium">
              Homepage already has maximum number of FAQs.
            </p>

            <p className="mt-2">Would you like to replace one instead?</p>

            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" onClick={() => setShowReplaceModal(false)}>
                Cancel
              </Button>
              <Button
                className="bg-[#3A643B]"
                onClick={() => {
                  setShowReplaceModal(false);
                  setShowSelectReplaceModal(true);
                }}
              >
                Replace
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* POPUP 2: Select FAQ to Replace */}
      {showSelectReplaceModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-xl w-[450px] max-h-[80vh]">

            <h3 className="font-semibold text-center mb-4">
              Select the question you want to replace
            </h3>

            {[1, 2, 3, 4, 5].map((id) => (
              <div key={id} className="flex items-center justify-between border-b py-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-sm">Dummy FAQ Question {id}</span>
                </div>
              </div>
            ))}

            <div className="flex justify-end gap-4 mt-6">
              <Button variant="outline" onClick={() => setShowSelectReplaceModal(false)}>
                Cancel
              </Button>
              <Button
                className="bg-[#3A643B]"
                onClick={() => router.push("/dashboard/customization/app/faq")}
              >
                Replace
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}




