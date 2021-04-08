<template>
    <div class="vue-drag-select">
        <div
            class="select-wrapper"
            @mousedown="handleMouseDown"
        >
            <div
                class="item"
                v-for="(i,idx) in list"
                :key="idx"
            >1</div>
            <div
                class="select-box"
                :style="selcetBoxStyle"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
                { name: 1 },
            ],
            selcetBoxStyle: {
                left: '0px',
                top: '0px',
                width: '0px',
                height: '0px',
                borderWidth: '0px',
            },
            startPoint: null,
            endPoint: null,
        };
    },
    methods: {
        handleMouseDown(e) {
            console.log(e);
            this.startPoint = {
                x: e.x,
                y: e.y,
            };
            // let span = document.createElement('span');
            // span.innerHTML = 'hhh';
            // span.style.position = 'absolute';
            // span.style.left = e.x + 'px';
            // span.style.top = e.y + 'px';
            // document.body.appendChild(span);

            // 开始监听鼠标 移动，抬起 事件
            window.addEventListener('mousemove', this.handleMouseMove);
        },
        handleMouseMove(e) {
            this.endPoint = {
                x: e.x,
                y: e.y,
            };
            this.computeLastEndPoint();
        },
        computeLastEndPoint() {
            console.log('hhhhhhhhh');
            // 选择框属性计算
            const left = Math.min(this.startPoint.x, this.endPoint.x);
            const top = Math.min(this.startPoint.y, this.endPoint.y);
            const width = Math.abs(this.startPoint.x - this.endPoint.x);
            const height = Math.abs(this.startPoint.y - this.endPoint.y);
            this.selectionBox = {
                left,
                top,
                width,
                height,
            };
            this.selcetBoxStyle = {
                left: `${left}px`,
                top: `${top}px`,
                width: `${width}px`,
                height: `${height}px`,
            };
        },
        computeSelectedItems() {},
    },
};
</script>

<style scoped lang="scss">
.vue-drag-select {
    .select-wrapper {
        padding: 40px;
        position: relative;
        background: wheat;
        overflow: scroll;
        .item {
            width: 100px;
            height: 100px;
            float: left;
            background-color: red;
            margin: 10px;
        }
        .select-box {
            position: absolute;
            background: rgba(0, 162, 255, 0.4);
            z-index: 10;
            border: 1px dotted rgb(0, 162, 255);
        }
    }
}
</style>