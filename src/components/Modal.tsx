import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Divider,
} from "@mantine/core";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({}: AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {};

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0
  return {
    // <Modal
    //     const title="Add an item"
    //     open={opened}
    //     onclose={() => {
    //       setOpened(false);
    //     }}
    //   >
    //     <TextInput
    //       label="Name of item"
    //       mt="md"
    //       description="Name of item"
    //       error="Name of item is required"
    //       placeholder="e.g., Chicken rice"
    //     />

    //     <NumberInput
    //       label="Price per dish"
    //       mt="md"
    //       description="Price per dish"
    //       error="Price per dish is required"
    //       placeholder="0"
    //     />

    //     <NumberInput
    //       label="Quantity"
    //       mt="md"
    //       description="Quantity"
    //       error="Quantity is required"
    //       placeholder="0"
    //     />

    //     <Select
    //       mt="md"
    //       label="Category"
    //       description="Category"
    //       placeholder="Select a Category"
    //       error="Category is required"
    //       data={["React", "Angular", "Vue", "Svelte"]}
    //     />
    //   </Modal>
    /* Type additional text here. */
  };
}
function setOpened(arg0: boolean) {
  throw new Error("Function not implemented.");
}

