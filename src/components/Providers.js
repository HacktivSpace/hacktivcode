'use client'
import { ThemeProvider } from 'next-themes'

function Providers({ children }) {
    return (
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false} >
            {children}
        </ThemeProvider>
    )
}

export default Providers