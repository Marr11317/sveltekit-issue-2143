/**
 * @type {import('@sveltejs/kit').Get}
 */
export async function get() {
    return {
        headers: {
            Location: "/en",
        },
        status: 302,
    }
}
