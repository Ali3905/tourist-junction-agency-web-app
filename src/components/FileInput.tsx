import { useEffect, useState } from "react";
import { FormField } from "./Form";


type FileInputProps = {
    field: FormField,
    register: any,
    errors: any,
    value: string[] | string
};

// FileInput Component
const FileInput = ({ field, register, errors, value }: FileInputProps) => {
    const { label, name, isMultiple = false } = field
    const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        if (isMultiple) {
            // Handle multiple files (store as array)
            setSelectedFiles(Array.from(files));
        } else {
            // Handle single file (store as string)
            setSelectedFiles([files[0]]);
        }
    };

    useEffect(()=>{
        if (value) {
            setSelectedFiles(value)
        }
    }, [value])

    return (
        <div>
            <label>{label}</label>
            <input
                {...register(name)}
                type="file"
                id={name}
                multiple={isMultiple}
                onChange={handleFileChange}
            />
            {errors[name] && errors[name]?.message &&
                typeof errors[name]?.message === 'string' ? (
                <span className='text-red-500'>{errors[name]?.message}</span>
            ) : null}

            {/* Display selected images */}
            {isMultiple ? (
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    {selectedFiles.map((file, index) => (
                        <img
                            key={index}
                            src={typeof file === "string" ? file : URL.createObjectURL(file)}
                            alt={file.name}
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                    ))}
                </div>
            ) : (
                selectedFiles[0] && (
                    <div style={{ marginTop: '10px' }}>
                        <img
                            src={typeof selectedFiles === "string" ? selectedFiles :URL.createObjectURL(selectedFiles[0])}
                            alt={selectedFiles[0]?.name}
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                    </div>
                )
            )}
        </div>
    );
};

export default FileInput