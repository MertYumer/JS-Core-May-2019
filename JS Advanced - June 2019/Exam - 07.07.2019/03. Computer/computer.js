class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHZ = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if (this.hddMemory < requiredSpace) {
            throw new Error('There is not enough space on the hard drive');
        }

        const program = {
            name,
            requiredSpace
        };

        this.installedPrograms.push(program);
        this.hddMemory -= program.requiredSpace;

        return program;
    }

    uninstallAProgram(name) {
        const programIndex = this.installedPrograms.findIndex(p => p.name === name);

        if (programIndex === -1) {
            throw new Error('Control panel is not responding');
        }

        this.hddMemory += this.installedPrograms[programIndex].requiredSpace;
        this.installedPrograms.splice(programIndex, 1);

        return this.installedPrograms;
    }

    openAProgram(name) {
        const programIndexInInstalledPrograms = this.installedPrograms
            .findIndex(p => p.name === name);

        if (programIndexInInstalledPrograms === -1) {
            throw new Error(`The ${name} is not recognized`);
        }

        const programIndexInTaskManager = this.taskManager
            .findIndex(p => p.name === name);

        if (programIndexInTaskManager > -1) {
            throw new Error(`The ${name} is already open`);
        }

        const program = this.installedPrograms[programIndexInInstalledPrograms];
        let totalRamUsage = 0;
        let totalCpuUsage = 0;

        for (const program of this.taskManager) {
            totalRamUsage += program.ramUsage;
        }

        for (const program of this.taskManager) {
            totalCpuUsage += program.cpuUsage;
        }

        const ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        const cpuUsage = ((program.requiredSpace / this.cpuGHZ) / 500) * 1.5;

        if (totalRamUsage + ramUsage >= 100) {
            throw new Error(`${name} caused out of memory exception`);
        }

        if (totalCpuUsage + cpuUsage >= 100) {
            throw new Error(`${name} caused out of cpu exception`);
        }

        const openedProgram = {
            name,
            ramUsage,
            cpuUsage
        };

        this.taskManager.push(openedProgram);
        return openedProgram;
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        }

        let info = [];

        for (const program of this.taskManager) {
            info.push(`Name - ${program.name} | Usage - CPU: ` +
                `${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%`)
        }

        return info.join('\n');
    }
}