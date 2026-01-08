const cursor = document.createElement('div');
cursor.classList.add('cursor');

const mir = document.createElement('i');
mir.classList.add('bi', 'bi-x', 'x_cursor');

cursor.appendChild(mir);
document.body.appendChild(cursor);


document.addEventListener('DOMContentLoaded', () =>
{
    const cursor = document.querySelector('.cursor');
    let isExpanding = false;

    document.addEventListener('mousemove', e =>
    {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener('click', () =>
    {
        if (!isExpanding)
        {
            isExpanding = true;
            cursor.classList.add("expand");

            setTimeout(() =>
            {
                cursor.classList.remove("expand");
                isExpanding = false;
            }, 500);
        }
    });
});