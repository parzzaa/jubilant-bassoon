import React, { useState } from 'react';

const CommentForm: React.FC = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_id: '',
        month_selected: '',
        day_selected: '',
        branch: '',
        shift: '',
        comment_type: '',
        comment: '',
        related_section: '',
        receipt_number: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const result = await res.json();
        console.log(result);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add form fields here with appropriate labels and inputs */}
            <input name="user_name" onChange={handleChange} value={formData.user_name} />
            <input name="user_id" onChange={handleChange} value={formData.user_id} />
            <select name="month_selected" onChange={handleChange} value={formData.month_selected}>
                {/* Add month options here */}
            </select>
            <input name="day_selected" onChange={handleChange} value={formData.day_selected} />
            <input name="branch" onChange={handleChange} value={formData.branch} />
            <input name="shift" onChange={handleChange} value={formData.shift} />
            <input name="comment_type" onChange={handleChange} value={formData.comment_type} />
            <input name="comment" onChange={handleChange} value={formData.comment} />
            <input name="related_section" onChange={handleChange} value={formData.related_section} />
            <input name="receipt_number" onChange={handleChange} value={formData.receipt_number} />
            <input name="description" onChange={handleChange} value={formData.description} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CommentForm;
