
import React from "react";
import Head from "next/head";
import {SimpleGrid, Space, Text, Title} from "@mantine/core";
import {ExcelProps} from "../../model/ExcelProps";
import ExcelCardItem from "../../components/ExcelCardItem";

export default function ExcelsList({list}): JSX.Element {
    return (
        <>
            <Head>
                <title>Fișiere Excel - A&A Consult</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <Title>Fișiere Excel</Title>

            <Text>Pentru a primi un fișier de mai jos, accesați formularul de pe pagina acestuia.</Text>

            <Space h="md"/>

            <SimpleGrid
                cols={1}
                breakpoints={[
                    {minWidth: 1800, cols: 5},
                    {minWidth: 1480, cols: 4},
                    {minWidth: 1100, cols: 3},
                    {minWidth: 740, cols: 2},
                ]}
            >
                {list.map((excelProps) => {
                    return (<ExcelCardItem {...excelProps} key={excelProps.id}/>);
                })}
            </SimpleGrid>

        </>
    );
}

export async function getStaticProps({}) {
    const req = await fetch('https://server.aaconsl.com/excel/');
    const data: ExcelProps[] = await req.json();

    data.sort((a, b) => new Date(a.date).getMilliseconds() - new Date(b.date).getMilliseconds())
    data.reverse()

    return {
        props: {list: data},
    }
}
