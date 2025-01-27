import { CollapsibleSection } from '../../../../components/collapsible-section'
import styles from './index.module.css'

export function Layers() {
  return (
    <CollapsibleSection title="Layers">
      <div className={styles.layersContainer}>
        <h3>Layers</h3>
        {/* Layers content */}
      </div>
    </CollapsibleSection>
  )
}
