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
          label="Input label"
          mt="md"
          description="Input description"
          error="Invalid name"
          placeholder="Input placeholder"
        />

        <NumberInput
          label="Input label"
          mt="md"
          description="Input description"
          error="Price per dish is required"
          placeholder="Input placeholder"
        />

        <NumberInput
          label="Input label"
          mt="md"
          description="Input description"
          error="Quantity is required"
          placeholder="Input placeholder"
        />

        <Select
          mt="md"
          label="Category"
          description="Category"
          placeholder="Select a Category"
          error="Category is required"
          data={["React", "Angular", "Vue", "Svelte"]}
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
