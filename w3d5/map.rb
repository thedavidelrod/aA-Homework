class Map
attr_accessor :mapped
    def initialized
        mapped = Array.new
    end

    def set(key, value)
        mapped.each do |subs|
            return subs[1] = value if subs[0] == key
        end
            mapped << [key, value] if !mapped.include?([key, value])

        end
    end

    def get(key)
        mapped.each do |sub|
            return sub[1] if sib[0] == key
        end
    end

    def delete(key)
        mapped.each_with_index do |sub, i|
            mapped.delete_at(i) if sub[0] == key
        end
    end

    def show
        @mapped
    end
end #! end of code 