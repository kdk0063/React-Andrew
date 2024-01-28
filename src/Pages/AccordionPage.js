import Accordion from '..Accordion/Components/Accordion';

function AccordionPage() {
    const items = [
        {
            label: "Can I use React on a Project",
            content: "You can use React You can use React You can use React You can use React"
        },
        {
            label: "Can I use React on a Project",
            content: "You can use React You can use React You can use React You can use React"
        },
        {
            label: "Can I use React on a Project",
            content: "You can use React You can use React You can use React You can use React"
        }
    ];

    return(
        <>  
            <Accordion items={items} />
        </>
    )
}

export default AccordionPage;