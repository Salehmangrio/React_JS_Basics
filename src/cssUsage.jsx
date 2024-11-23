import './style/cssUsage.css'
import style from './style/cssUsage.module.css'
export default function CssUsageExample() {
    return (
        <>
            <h1 className='primary'>Css Usage Example 1</h1>
            <h1
                style={{ backgroundColor: "red", color: "white", fontWeight: "bolder", padding: "20px" }
                }>Css Usage Example 2</h1>
            <h1 className={style.success}>Css Usage Example 3</h1>
        </>
    )
}