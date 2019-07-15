import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class NoticeDetailAdmin extends Component {
    render() {
        return (
            <div>
                 <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      수정
                    </Button>
            </div>
        );
    }
}

export default NoticeDetailAdmin;