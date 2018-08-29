import React from 'react';

import styles from './styles.scss';

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        // eslint-disable-next-line
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const makeDouble = (items) => {
    const newItems = [];
    items.forEach((i) => {
        newItems.push({
            ...i,
            key: `${i.id}-first`,
        });
        newItems.push({
            ...i,
            key: `${i.id}-second`,
        });
    });
    return shuffle(newItems);
};

const getId = string => (
    string.substring(0, string.indexOf('-'))
);

export default class TeamMembers extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selected: [],
            completed: [],
        };
        this.dMembers = makeDouble(props.members);
    }

    getMemberClassName = (memberKey) => {
        const {
            selected,
            completed,
        } = this.state;
        const classNames = [styles.member];
        const indexInSelected = selected.indexOf(memberKey);
        const indexInCompleted = completed.indexOf(memberKey);

        if (indexInCompleted !== -1) {
            classNames.push(styles.completedMember);
        } else if (indexInSelected !== -1) {
            classNames.push(styles.selectedMember);
        }
        return classNames.join(' ');
    }

    handlePictureClick = (memberKey) => {
        const {
            selected,
            completed,
        } = this.state;

        let newSelected = [...selected];
        const newCompleted = [...completed];
        const indexInCompleted = completed.indexOf(memberKey);
        if (indexInCompleted !== -1) {
            return;
        }
        const index = newSelected.indexOf(memberKey);

        if (index !== -1) {
            newSelected.splice(index, 1);
        } else {
            if (newSelected.length >= 2) {
                newSelected = [];
            }
            newSelected.push(memberKey);
            if (newSelected.length === 2) {
                const firstItemId = getId(newSelected[0]);
                const secondItemId = getId(newSelected[1]);
                if (firstItemId === secondItemId) {
                    newCompleted.push(newSelected[0]);
                    newCompleted.push(newSelected[1]);
                    newSelected = [];
                }
            }
        }

        this.setState({
            selected: newSelected,
            completed: newCompleted,
        });
    }

    render() {
        return (
            <div className={styles.team}>
                {this.dMembers.map(m => (
                    <button
                        key={m.key}
                        className={this.getMemberClassName(m.key)}
                        onClick={() => this.handlePictureClick(m.key)}
                    >
                        <img src={m.image} alt={m.name} />
                    </button>
                ))}
            </div>
        );
    }
}
