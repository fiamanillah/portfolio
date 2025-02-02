function Section({ children, className }) {
    return (
        <section className={` p-2 ${className}`}>
            <div className=" max-w-screen-xl mx-auto">{children}</div>
        </section>
    );
}

export default Section;
