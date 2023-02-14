import { Footer } from "./auth/layout/Footer"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"

export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter/>
      <Footer/>
    </AppTheme>
  )
}
