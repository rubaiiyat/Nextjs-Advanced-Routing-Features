import Modal from "@/app/components/Modal";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <Modal id={id} />
    </div>
  );
};

export default page;
