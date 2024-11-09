// file data
import { IconChevronDown } from "@tabler/icons-react";

export const naigations = [
    {
        title: "Khóa học",
        link: false,
        icon: IconChevronDown,
        submenu: [
            {
                title: "Trung tâm ngoại ngữ và tin học",
                link:"/program"
            },
            {
                title: "Trung tâm ngoại ngữ tiếng trung",
                link:"/program"
            },
            {
                title: "Trung tâm ngoại ngữ tiếng hàn",
                link:"/program"
            },
        ]
    },
    {
        title: "Khóa học 1",
        link: false,
        icon: IconChevronDown,
        submenu: [
            {
                title: "Trung tâm ngoại ngữ và tin học",
                link:"/program"
            },
            {
                title: "Trung tâm ngoại ngữ tiếng trung",
                link:"/program"
            },
            {
                title: "Trung tâm ngoại ngữ tiếng hàn",
                link:"/program"
            },
        ]
    }
]

// file code hiển thị

export default function Header() {
    const ItemLink = () => {
        return (
            <div className="flex">
                {naigations.map((item, index) => (
                    <div key={index} className="relative group">
                        <div className="flex justify-between">
                            <h6>{item.title}</h6>
                            {item.icon && <item.icon size={16} stroke = {2} />}
                        </div>
                        {item.submenu && (
                            <div className="absolute invisible group-hover:visible"></div>
                        )}
                    </div>
                ))}
            </div>
        )
    }
}