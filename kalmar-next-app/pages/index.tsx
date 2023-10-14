import Index from "@/src/views/index";
export default Index;

export const getServerSideProps = async (ctx: any) => {
    return {
        props: {
        },
    };
};