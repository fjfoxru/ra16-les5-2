function Promo(props) {
// В props картинка, текст

    return (
        <>
            <img src={props.img_url} />
            <TitleLinkItem />
            <LinkItem />
        </>

    );
}


export default Promo;