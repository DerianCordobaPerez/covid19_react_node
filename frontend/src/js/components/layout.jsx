import { MenuAppBar } from './menuAppBar'

export default function Layout({ children }) {
    return (
        <>
            <MenuAppBar title="Menu principal" variant="h6" />
            {children}
        </>
    )
}