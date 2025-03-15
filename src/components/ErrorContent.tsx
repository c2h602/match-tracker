import error from '../assets/alert-triangle.png'

export default function ErrorContent() {
    return (
        <div className="error-content">
            <img src={error}/>
            <p>Ошибка: не удалось загрузить информацию</p>
        </div>
    )
}