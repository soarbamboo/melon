import NotePad from "@/src/views/notepad";

export default NotePad;
export const getServerSideProps = async (ctx: any) => {
    // console.log(1111, ctx.query)
    const name = ctx.query.name;
    return {
        props: {
            name: name ? name : null
        },
    };
};