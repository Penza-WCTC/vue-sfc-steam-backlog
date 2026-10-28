<!-- 
 NOT IMPLEMENTED YET!!! This is where I spent most of this week, I am trying to add functionality to the callendar that is on the home page. 
 
 I plan on letting users fill out a little form, and then that get handled by a "GameHistoryCard" or smthn.

 Then if you click on the callendar date, it will emit up to the GameHistoryCard with the date clicked so it can retrieve the data.

 I am thinking a simple form, like hours, (rating, date, something), and a notes section.
-->


<script>
export default {
    name: "GameHistoryCalendar",

    props: {
        currentMonthNumber: { type: number, required: true },
        currentYearNumber: { type: number, required: true }
    },

    methods: {
        thisWeek(n, offsetBy) {
            let returnedArray = [];

            for (let index = 0; index < 6; index++) {
                returnedArray[index] = index + ((7 * n) - offsetBy);
            }

            returnedArray.forEach(date => {
                if (date < 1) {
                    date = "";
                }
            });

            return returnedArray;
        },

    },

    computed: {
        startOfMonth() {
            const date = new Date(this.currentYearNumber, this.currentMonthNumber, 1);
            return date.getDay();
        },

        daysInMonth() {
            const date = new Date(this.currentYearNumber, this.currentMonthNumber, 0);
            return date.getDate();
        },

        monthName() {
            const date = new Date(this.currentYearNumber, this.currentMonthNumber);
            return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
        }
    },
}
</script>

<template>
    <div class="border bg-secondary">
        <p class="text-center">{{ monthName }}</p>
        <table class="table table-primary table-bordered text-center">
            <tbody>
                <tr v-for="n in Math.ciel((startOfMonth + daysInMonth) / 7)">
                    <td v-for="day in thisWeek(n - 1, startOfMonth)" @click="$emit('dayClicked', day)">{{ day }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>