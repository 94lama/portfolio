import "./toggler.sass"

export default function Toggler() {
    return (
        /* Designed by Alex Ruiz (https://uiverse.io/profile/alexruix) */
        <div id="darkModeToggler" className="fixed bottom-10 right-20 w-14 h-8">
            <label className="switch">
                <input type="checkbox" />
                    <span className="slider"></span>
            </label>
        </div>
    )
}