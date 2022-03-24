import {ActionIcon, useMantineColorScheme} from "@mantine/core";
import { Sun, MoonStars } from 'tabler-icons-react';

export default function LightAndDarkModeButton({}) {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <>
            <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Schimbă tema"
            >
                {dark ? <Sun size={18} /> : <MoonStars size={18} />}
            </ActionIcon>
        </>
    )
}
