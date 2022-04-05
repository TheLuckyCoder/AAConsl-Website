import styles from '../styles/Home.module.css'
import React from "react";
import {AspectRatio, Image, SimpleGrid} from "@mantine/core";
import {ExcelProps} from "../model/ExcelProps";
import ExcelCardItem from "../components/ExcelCardItem";

export default function Home({list}) {
    return (
        <>
            <header className={styles.header}>
                <AspectRatio ratio={1} sx={{ maxWidth: 300 }} mx={"auto"}>
                    <Image src="/aaconsl.webp" width={"100%"} height={"100%"} alt="A&A Consult"/>
                </AspectRatio>
                <h1 className={styles.title}>
                    Bine ai venit la<br/><div color="#0070f3">A&A Consult</div>
                </h1>
            </header>

            <main className={styles.main}>

                <p className={styles.description}>
                    Dacă esti interesat in fisiere Excel care iti automatizeaza munca, pentru tine sau compania ta, nu ezita sa ne contactezi.
                </p>

                <SimpleGrid
                    cols={1}
                    spacing="xl"
                    breakpoints={[
                        {minWidth: 840, cols: 2},
                    ]}
                >
                    {list.map((excelProps) => {
                        return (<ExcelCardItem showDate={false} {...excelProps} key={excelProps.id} />);
                    })}
                </SimpleGrid>
            </main>
        </>
    )
}

export async function getStaticProps({}) {
    const req = await fetch('https://server.aaconsl.com/excel/');
    const data: ExcelProps[] = await req.json();

    data.sort((a, b) => new Date(a.date).getMilliseconds() - new Date(b.date).getMilliseconds())
    data.reverse()
    return {
        props: {list: data.slice(0, 4)},
    }
}