import { useEffect, useState } from "react";

const lessons = ["JavaScript", "ReactJS"];
function Content() {
    const [room, setRoom] = useState("JavaScript");
    console.log(room);
    useEffect(() => {
        window.addEventListener(room, ({ detail }) => {
            console.log(detail);
        });

        return () => {
            window.removeEventListener(room, () => {
                console.log(`Unsubscription ${room}`);
            });
        };
    }, [room]);

    return (
        <div className="content">
            {lessons.map((lesson, index) => (
                <h4 key={index} onClick={() => setRoom(lesson)}>
                    {lesson}
                </h4>
            ))}
        </div>
    );
}

export default Content;
