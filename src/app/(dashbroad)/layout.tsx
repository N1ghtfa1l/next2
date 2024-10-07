import Header from '../components/Header/Header'
import style from '../page.module.css'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <main className={style.intro}>{children}</main>
        </>
    )
}