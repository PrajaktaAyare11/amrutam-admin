"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ChevronDown, Download, RefreshCw, ArrowLeft, ChevronRight } from "lucide-react";
import { faqConsumer, faqDoctor } from "@/lib/data";

const mainTabs = ["Banners", "Per Page Products", "Ingredients", "FAQ"];

export default function FAQPage() {
  const [activeMainTab, setActiveMainTab] = useState("FAQ");
  const [activeFAQTab, setActiveFAQTab] = useState("Consumer");

  const [showAddForm, setShowAddForm] = useState(false);
  const [addToHomepage, setAddToHomepage] = useState(false);

  const [homepageFull] = useState(true);
  const [showReplacePopup, setShowReplacePopup] = useState(false);
  const [showSelectReplacePopup, setShowSelectReplacePopup] = useState(false);
  const [selectedReplaceIndex, setSelectedReplaceIndex] = useState<number | null>(null);

  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showHomepageFullPopup, setShowHomepageFullPopup] = useState(false);

  const currentData = activeFAQTab === "Consumer" ? faqConsumer : faqDoctor;
  type FAQCategory = "Consultation" | "Shop" | "Wallet" | "Forum" | "Additional";

  const faqCategories: FAQCategory[] = [
    "Consultation",
    "Shop",
    "Wallet",
    "Forum",
    "Additional",
  ];

  const [activeCategory, setActiveCategory] =
    useState<FAQCategory>("Consultation");

  const selectedCategoryData = currentData[activeCategory];

  const handleSubmitFAQ = () => {
  if (addToHomepage && homepageFull) {
    setShowHomepageFullPopup(true);
    return;
  }

  setShowAddForm(false);
  setAddToHomepage(false);
};



  return (
    <div className="space-y-6">

      <div className="flex items-center gap-2 text-sm">
              <span
                className="text-gray-600 hover:text-gray-900 cursor-pointer font-semibold"
              >
                Customization
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-green-800 font-semibold">App</span>
            </div>

      {/* ------------------ MAIN TABS ------------------ */}
      <div className="bg-white  rounded-xl px-6 py-3 flex gap-12  font-semibold">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveMainTab(tab);
              setShowAddForm(false);
            }}
            className={`pb-1 ${
              activeMainTab === tab
                ? "text-green-700 border-b-2 border-green-700"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeMainTab !== "FAQ" && (
        <div className="bg-white p-20 rounded-xl text-gray-400 text-center">
          {activeMainTab} section (Coming soon)
        </div>
      )}

      {activeMainTab === "FAQ" && (
        <div className="space-y-6">

          {/* ✅ HIDE CONSUMER / DOCTOR TABS WHEN ADD FORM IS OPEN */}
          {!showAddForm && (
            <div className="bg-white rounded-xl px-6 py-3 flex justify-around gap-16  font-medium">
              {["Consumer", "Doctor"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFAQTab(tab)}
                  className={`pb-1 ${
                    activeFAQTab === tab
                      ? "text-green-700 border-b-2 border-green-700"
                      : "text-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}

          {/* ✅ ✅ ADD NEW FAQ FORM */}
          {showAddForm && (
            <div className="bg-white rounded-xl p-8 space-y-6 shadow-sm">

              {/* ✅ BACK BUTTON */}
              <button
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-black"
                onClick={() => setShowAddForm(false)}
              >
                <ArrowLeft size={16} />
                Back
              </button>

              <h2 className="font-semibold text-lg">Add New FAQ</h2>

              {/* ✅ FLOATING INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="relative">
                  <input
                    value="Consumer Web"
                    disabled
                    className="border p-3 rounded-md w-full bg-gray-50 text-gray-700 cursor-not-allowed"
                  />
                  <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                    Select Platform *
                  </label>
    </div>


                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600">
                    Select Title *
                  </label>
                  <input className="w-full border rounded-lg px-4 py-3 text-sm" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

              </div>

              {/* ✅ CLICKABLE RADIO */}
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setAddToHomepage(!addToHomepage)}
              >
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    addToHomepage ? "border-green-700" : "border-gray-400"
                  }`}
                >
                  {addToHomepage && (
                    <div className="w-3 h-3 bg-green-700 rounded-full" />
                  )}
                </div>
                <span className="text-sm">Add to homepage as well</span>
              </div>

              {/* ✅ QUESTION + ANSWER FLOATING */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600">
                    Add Question *
                  </label>
                  <textarea className="w-full border rounded-lg px-4 py-3 text-sm h-32" value={question} onChange={(e) => setQuestion(e.target.value)}/>
                </div>

                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600">
                    Add Answer *
                  </label>
                  <textarea className="w-full border rounded-lg px-4 py-3 text-sm h-32" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
                </div>

              </div>

              {/* ✅ BUTTONS */}
              <div className="flex justify-end gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setTitle("");
                    setQuestion("");
                    setAnswer("");
                    setAddToHomepage(false);
                  }}
                >
                  Clear all
                </Button>
                <Button className="bg-[#3A643B]" onClick={handleSubmitFAQ}>
                  Submit
                </Button>
              </div>
            </div>
          )}

          {/* ✅ FAQ LIST (UNCHANGED) */}
          {!showAddForm && (
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between px-2 py-4">
                <div className="flex items-center gap-5">
                  <h3 className="font-semibold">FAQ List</h3>
                  <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-[240px]">
                    <Image src="/search.png" alt="Search" width={16} height={16} className="mr-2 opacity-60" />
                    <input placeholder="Search here" className="bg-transparent outline-none text-sm w-full" />
                  </div>
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100">
                    <RefreshCw size={16} className="text-green-700" />
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <Button className="bg-[#3A643B]" onClick={() => setShowAddForm(true)}>
                    Add New FAQ
                  </Button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100">
                    <ArrowUpDown size={16} className="text-green-700" />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100">
                    <Download size={16} className="text-green-700" />
                  </button>
                </div>
              </div>

            <div className="flex justify-between md:justify-center md:gap-40 border-b mb-4 font-medium overflow-x-auto no-scrollbar px-2">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pb-2 whitespace-nowrap ${
                    activeCategory === cat
                      ? "text-green-700 border-b-2 border-green-700"
                      : "text-gray-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

              <div className="divide-y">
                {selectedCategoryData.map((question, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-3 text-sm px-2 rounded-md transition ${
                      selectedReplaceIndex === i ? "bg-green-50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Drag Handle */}
                      <span className="text-gray-400 cursor-move">⋮⋮</span>

                      {/* ✅ Checkbox with highlight + popup trigger */}
                      <input
                        type="checkbox"
                        checked={selectedReplaceIndex === i}
                        onChange={() => {
                          setSelectedReplaceIndex(i);
                          setShowReplacePopup(true); // ✅ TRIGGERS POPUP 1
                        }}
                      />

                      {question}
                    </div>

                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                ))}

              </div>
            </div>
          )}
        </div>
      )}
      {showReplacePopup && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl w-[400px] text-center space-y-4">
      <p className="text-red-500 text-sm">
        Homepage already has maximum number of FAQs.
      </p>

      <p>Would you like to replace one instead?</p>

      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => {
            setShowReplacePopup(false);
            setSelectedReplaceIndex(null);
          }}
        >
          Cancel
        </Button>

        <Button
          className="bg-[#3A643B]"
          onClick={() => {
            setShowReplacePopup(false);
            setShowSelectReplacePopup(true);
          }}
        >
          Replace
        </Button>
      </div>
    </div>
  </div>
)}

{showSelectReplacePopup && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl w-[420px] space-y-4 max-h-[80vh] overflow-y-auto">
      <p className="font-medium text-center">
        Select the question that you would like to replace
      </p>

      {selectedCategoryData.map((q: string, i: number) => (
        <div
          key={i}
          onClick={() => setSelectedReplaceIndex(i)}
          className={`flex items-center justify-between gap-3 border-b py-3 px-3 cursor-pointer rounded-md ${
            selectedReplaceIndex === i ? "bg-green-50" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-gray-400">⋮⋮</span>
            <input type="checkbox" checked={selectedReplaceIndex === i} readOnly />
            <span className="text-sm">{q}</span>
          </div>

          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      ))}

      <div className="flex justify-end gap-4 pt-4">
        <Button
          variant="outline"
          onClick={() => {
            setShowSelectReplacePopup(false);
            setSelectedReplaceIndex(null);
          }}
        >
          Cancel
        </Button>

        <Button
          className="bg-[#3A643B]"
          onClick={() => {
            setShowSelectReplacePopup(false);
            setShowAddForm(false);
            setSelectedReplaceIndex(null);
          }}
        >
          Replace
        </Button>
      </div>
    </div>
  </div>
)}
{showHomepageFullPopup && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl w-[420px] text-center space-y-4 shadow-xl">

      {/* ✅ YOUR REQUIRED MESSAGE */}
      <p className="text-red-500 text-sm">
        Homepage already has maximum number of FAQs. Please replace a question.
      </p>

      <div className="flex justify-center gap-4 pt-2">
        <Button
          variant="outline"
          onClick={() => setShowHomepageFullPopup(false)}
        >
          Cancel
        </Button>

        <Button
          className="bg-[#3A643B]"
          onClick={() => {
            setShowHomepageFullPopup(false);
            setShowReplacePopup(true); // ✅ opens replace-confirm popup next
          }}
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
