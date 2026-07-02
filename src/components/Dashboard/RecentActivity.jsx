import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText
} from "@mui/material";

const RecentActivity = ({ activities }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                p: 3,
                borderRadius: 3,
                height: "100%"
            }}
        >
            <Typography
                variant="h6"
                mb={2}
            >
                Recent Activity
            </Typography>

            <List>

                {
                    activities.map(item => (
                        <ListItem key={item.id}>
                            <ListItemText
                                primary={`${item.customer} - ${item.type}`}
                                secondary={item.time}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </Paper>
    )
}

export default RecentActivity