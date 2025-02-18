import { Button, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export const WaitingRoom = ({ joinChat }) => {
    const [userName, setUserName] = useState();
    const [chatRoom, setChatRoom] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        joinChat(userName, chatRoom);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="max-w-sm w-full bg-white p-8 rounded shadow-lg"
        >
            <Heading size="lg">Онлайн чат</Heading>
            <div className="mb-4">
                <Text fontSize={"sm"}>Имя пользователя</Text>
                <Input
                    name="username"
                    placeholder="Введите ваше имя"
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <Text fontSize={"sm"}>Название чата</Text>
                <Input
                    name="chatname"
                    placeholder="Введите название чата"
                    onChange={(e) => setChatRoom(e.target.value)}
                />
            </div>
            <Button type="submit" colorScheme="blue">
                Присоединиться
            </Button>
        </form>
    );
};
