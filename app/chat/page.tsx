"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useChat } from "ai/react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="h-full flex">
      <div className="w-64 text-white bg-neutral-900 flex-shrink-0 hidden md:block">
        {/* 左侧内容 */}
        左侧内容
      </div>
      {/* 右侧内容 */}
      <div className="flex-grow relative overflow-auto">
        {input}
        {messages.map((m) => {
          return (
            <div key={m.id} className="border rounded-lg p-4">
              <div className="mb-4">
                <div
                  className={cn(
                    m.role === "user" ? "text-gray-600" : "text-blue-600",
                  )}
                >
                  {m.role}
                </div>
                <div
                  className={cn(
                    m.role === "user" ? "bg-gray-200" : "bg-blue-100",
                    "p-2 rounded-lg",
                  )}
                >
                  {m.content}
                </div>
              </div>
            </div>
          );
        })}

        <div className="sticky bottom-2 px-9 w-full">
          <form onSubmit={handleSubmit} className="flex relative">
            <Textarea
              value={input}
              onChange={handleInputChange}
              className="max-h-52 resize-none pr-12"
            ></Textarea>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 bottom-2"
              type="submit"
            >
              <PaperPlaneIcon className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
