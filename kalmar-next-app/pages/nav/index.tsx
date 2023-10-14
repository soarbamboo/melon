
import Nav from "@/src/views/nav";

export default Nav;
export const getServerSideProps = async (ctx: any) => {
    console.log(1111, ctx)
    const name = ctx.query.name;
    return {
        props: {
            name: name ? name : null
        },
    };
};