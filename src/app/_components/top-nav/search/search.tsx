"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import SearchIcon from "@/app/components/icons/search";

const SearchComponent = () => {
  return (
    <div className="mr-[8px] flex items-center justify-between rounded-sm bg-secondary py-[7px] pl-[20px] pr-[12px] focus-visible:ring-0 focus-visible:ring-offset-0">
      <Input
        placeholder="What are you looking for?"
        className="h-[24px] border-none border-transparent bg-transparent p-0 pr-[34px] text-sm focus:border-none focus-visible:ring-transparent focus-visible:ring-offset-transparent"
      />
      <Button variant="ghost" size="icon" className="h-[24px]">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchComponent;
