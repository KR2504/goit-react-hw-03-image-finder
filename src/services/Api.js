import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '28612433-fc9d4cd8e95c76d6a15066874';

export default function fetchImage({ value, page }) {

    return fetch(
            `https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(
                new Error(Notify.warning("Sorry, there are no images matching your search query. Please try again."))
            )
        })

};

Notify.init({
    width: '280px',
    position: 'right-top',
    distance: '30px',
    borderRadius: '10px',
    timeout: 2000,
    cssAnimationStyle: 'from-right',
})