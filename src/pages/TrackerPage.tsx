import { useState } from "react";
import {
  Button,
  Stack,
  Title,
  Divider,
  Container,
  Modal,
  TextInput,
  NumberInput,
  Select,
} from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import AddFoodModal from "../components/Modal";

type FoodItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
};

export default function FoodTracker() {
  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState<FoodItem[]>([]);
  const categories = ["Main Course", "Drink", "Dessert"];

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button onClick={() => setOpened(true)}>Add Food Item</Button>
      {/* Type additional AddFoodModal here. */}
      <Modal
        title="Add an item"
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
      >
        <TextInput
          label="Name of item"
          mt="md"
          description="Name of item"
          error="Name of item is required"
          placeholder="e.g., Chicken rice"
        />

        <NumberInput
          label="Price per dish"
          mt="md"
          description="Price per dish"
          error="Price per dish is required"
          placeholder="0"
        />

        <NumberInput
          label="Quantity"
          mt="md"
          description="Quantity"
          error="Quantity is required"
          placeholder="0"
        />

        <Select
          mt="md"
          label="Category"
          description="Category"
          placeholder="Select a Category"
          error="Category is required"
          data={["Main Course", "Drink", "Dessert"]}
        />
      </Modal>

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack>{/* Type additional food card list here. */}</Stack>
    </Container>
  );
}
