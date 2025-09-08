import { Text, Group } from "@mantine/core";
interface Props{
  userName:string,
  studentId:string,
  course: string,
  year: any;
}
export default function Footer(P:Props) {
  return (
    <Group p="md" justify="center">
      <Text>
        © {P.userName} {P.studentId} {P.course}-{P.year}. All rights reserved.
      </Text>
    </Group>
  );
}
