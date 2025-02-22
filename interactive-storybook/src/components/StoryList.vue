<template>
    <div>
        <h2>Choose a Story</h2>
        <button @click="createNewStory" class="create-story-btn">Create New Story</button>
        <ul>
            <li v-for="story in stories" :key="story._id">
                <router-link :to="`/story/${story._id}`">{{ story.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stories: [],
            apiBaseUrl: process.env.VUE_APP_PORT ? `http://localhost:${process.env.VUE_APP_PORT}` : ''
        };
    },
    methods: {
        async createNewStory() {
            try {
                const response = await fetch(`${this.apiBaseUrl}/api/stories`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: 'New Story',
                        nodes: [{
                            prompt: 'Start your story here...',
                            choices: [],
                            image: '',
                            nodeIndex: 0
                        }],
                        lastNodeId: 0
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to create story');
                }

                const result = await response.json();
                this.$router.push(`/story/${result.insertedId}`);
            } catch (error) {
                console.error('Error creating story:', error);
            }
        }
    },
    async mounted() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/api/stories`);
            this.stories = await response.json();
        } catch (error) {
            console.error('Error fetching stories:', error);
        }
    }
};
</script>

<style scoped>
.create-story-btn {
    margin: 1rem;
    padding: 0.5rem 1rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.create-story-btn:hover {
    background-color: #3aa876;
}
</style>