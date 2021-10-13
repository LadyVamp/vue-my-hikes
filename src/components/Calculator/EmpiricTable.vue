<template>
    <div>
		<p class="caption">В пешем походе по Крыму была проведена серия экспериментов. Было выяснено, что среднее арифметическое время закипания 1 литра воды для горелки BRS-3000T составляет 6 минут 29 секунд.</p>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">№</th>
                        <th class="text-left">Объем воды, л</th>
                        <th class="text-left">Время закипания</th>
                        <th class="text-left">Время закипания 1 литра воды</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in experiments" :key="item.name">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.waterVolume }}</td>
                        <td>{{ item.time }}</td>
                        <td>{{ item.time1L }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            experiments: [
                {
                    waterVolume: 1,
                    time: "07:20",
                    time1L: "07:20",
                },
                {
                    waterVolume: 1.35,
                    time: "08:50",
                    time1L: "06:33",
                },
                {
                    waterVolume: 1.2,
                    time: "07:40",
                    time1L: "06:23",
                },
                {
                    waterVolume: 1.5,
                    time: "08:30",
                    time1L: "05:40",
                },
            ],
        };
    },
};
</script>