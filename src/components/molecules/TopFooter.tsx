import { Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image"

export const TopFooter = () => {
    return (
        <Flex
            w="100%"
            p={[8, 8, 8, 8]}
            justifyContent="center"
        >
            <Flex
                gap={[10, 10, 10, 20]}
                direction={["column", "column", "column", "row"]}
            >
                <HStack spacing={[12, 12, 12, 20]}>
                    <Link href={""}>
                        <Image src={"/images/footerLogos/sunflex.png"} alt={"Sunflex logo"} width={100} height={10} />
                    </Link>

                    <Link href={""}>
                        <Image src={"/images/footerLogos/saintGlobal.png"} alt={"Saint-Gobain Glass logo"} width={80} height={10} />
                    </Link>

                    <Link href={""}>
                        <Image src={"/images/footerLogos/climalit.png"} alt={"Climalit logo"} width={60} height={10} />
                    </Link>

                    <Link href={""}>
                        <Image src={"/images/footerLogos/jnf.png"} alt={"JNF logo"} width={70} height={10} />
                    </Link>
                </HStack>

                <HStack spacing={[12, 12, 12, 20]}>
                    <Link href={""}>
                        <Image src={"/images/footerLogos/geze.png"} alt={"Geze logo"} width={100} height={10} />
                    </Link>

                    <Link href={""}>
                        <Image src={"/images/footerLogos/guardian.png"} alt={"Guardian Glass logo"} width={100} height={10} />
                    </Link>

                    <Link href={""}>
                        <Image src={"/images/footerLogos/dorma.png"} alt={"Dorma logo"} width={70} height={10} />
                    </Link>

                    <Link href={""}>
                        <Image src={"/images/footerLogos/casma.png"} alt={"Casma logo"} width={50} height={10} />
                    </Link>
                </HStack>
            </Flex>
        </Flex>

    )
}