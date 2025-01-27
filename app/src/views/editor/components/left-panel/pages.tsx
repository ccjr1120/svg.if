import { CollapsibleSection } from '../../../../components/collapsible-section'
import styles from './index.module.css'

export function Pages() {
  return (
    <CollapsibleSection title="Pages">
      <div className={styles.pagesContainer}>
        <h3>Pages</h3>
        {/* Page list content */}
      </div>
    </CollapsibleSection>
  )
}
